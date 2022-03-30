<?php

namespace App\Http\Controllers\Api\HRD;

use App\Http\Controllers\Controller;
use App\Http\Requests\Hrd\StagesRequest;
use App\Models\Company;
use App\Models\Stage;
use App\Models\StageUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StagesController extends Controller
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
        $stages = Stage::with('stage_users.user.detail.structure')->where('company_id',$company->id)->get();
        return response()->json($stages,200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StagesRequest $request)
    {
        $user = Auth::user();
        if(!$user->company){
            return response()->json(['message'=>'Company not found'],200);
        }
        $company = $user->company->company;
        $data = $request->all();
        $data['company_id'] = $company->id;
        $stage = Stage::create($data);
        $stage->load('stage_users.user.detail.structure');
        return response()->json($stage,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Stage  $stage
     * @return \Illuminate\Http\Response
     */
    public function show(Stage $stage)
    {
        $stage->load('stage_users.user.detail.structure');
        return response()->json($stage,200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Stage  $stage
     * @return \Illuminate\Http\Response
     */
    public function update(StagesRequest $request, Stage $stage)
    {
        $data = $request->all();
        $stage->update($data);
        $stage->load('stage_users.user.detail.structure');
        return response()->json($stage,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Stage  $stage
     * @return \Illuminate\Http\Response
     */
    public function destroy(Stage $stage)
    {
        $stage->delete();
        return response()->noContent();
    }
    public function setUsers(Request $request)
    {
        $data = $request->all();
        $stage = Stage::find($data['stage_id']);
        if(isset($data['ids'])){
            foreach ($data['ids'] as $id)
            {
                $exist = StageUser::where('stage_id',$stage->id)
                    ->where('user_id',$id)
                    ->first();
                if(!$exist){
                    StageUser::create([
                        'stage_id' => $stage->id,
                        'user_id'   =>  $id
                    ]);
                }
            }
        }
        $stage->load('stage_users.user');
        return response()->json($stage,200);
    }
    public function deleteUser($id)
    {
        $stage_user = StageUser::find($id);
        $stage_user->delete();
        return response()->noContent();
    }
}
