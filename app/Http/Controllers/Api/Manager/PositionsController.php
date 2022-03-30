<?php

namespace App\Http\Controllers\Api\Manager;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Position;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PositionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = Auth::user();
        if(!$user->company){
            return response()->json(['message'=>'Company not found'],200);
        }
        $company = $user->company->company;
        if($request->name){
            $positions = Position::where('company_id',$company->id)->where('title','like','%'.$request->name.'%')->get();
        }else{
            $positions = Position::where('company_id',$company->id)->get();
        }
        return response()->json($positions,200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        if(!$user->company){
            return response()->json(['message'=>'Company not found'],200);
        }
        $company = $user->company->company;
        $data = $request->all();
        $data['company_id'] = $company->id;
        $position = Position::create($data);
        return response()->json($position,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function show(Position $position)
    {
        return response()->json($position,200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Position $position)
    {
        $data = $request->all();
        $position->update($data);
        return response()->json($position,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function destroy(Position $position)
    {
        $position->delete();
        return response()->noContent();
    }
}
