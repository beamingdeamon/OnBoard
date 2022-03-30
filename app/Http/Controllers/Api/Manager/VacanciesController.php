<?php

namespace App\Http\Controllers\Api\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\VacancyRequest;
use App\Models\Vacancy;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VacanciesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        if(!$user->company){
            return response()->json(['message'=>'Company not found'],200);
        }
        $company = $user->company->company;
        $vacancies = Vacancy::with('user','company','search_reason','position','vacancy_status','replies','manager')->where('company_id',$company->id)->get();
        return response()->json($vacancies,200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(VacancyRequest $request)
    {
        $data = $request->all();
        $user = Auth::user();
        if(!$user->company){
            return response()->json(['message'=>'Company not found'],200);
        }
        $company = $user->company->company;
        $data['company_id'] = $company->id;
        $data['manager_id'] = $user->id;
        $vacancy = Vacancy::create($data);
        $vacancy->load('user','company','search_reason','position','vacancy_status','replies');
        return response($vacancy,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vacancy  $vacancy
     * @return \Illuminate\Http\Response
     */
    public function show(Vacancy $vacancy)
    {
        $vacancy->load('user','company','search_reason','position','vacancy_status','replies');
        return response($vacancy,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vacancy  $vacancy
     * @return \Illuminate\Http\Response
     */
    public function update(VacancyRequest $request, Vacancy $vacancy)
    {
        $data = $request->all();
        if(!isset($data['position_id'])){
            $data['position_id'] = null;
        }
        $vacancy->update($data);
        $vacancy->load('user','company','search_reason','position','vacancy_status','replies');
        return response($vacancy,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vacancy  $vacancy
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vacancy $vacancy)
    {
        $vacancy->delete();
        return response()->noContent();
    }

    public function duplicate($id)
    {
        $vacancy = Vacancy::findOrFail($id);
        $new_vacancy = $vacancy->replicate();
        $new_vacancy->vacancy_status_id = 1;
        $new_vacancy->created_at = Carbon::now();
        $new_vacancy->updated_at = Carbon::now();
        $new_vacancy->push();
        $new_vacancy->load('user','company','search_reason','position','vacancy_status','replies');
        return response()->json($new_vacancy,200);
    }
}
