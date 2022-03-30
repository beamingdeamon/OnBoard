<?php

namespace App\Http\Controllers\Api\Admin\Directories;

use App\Http\Controllers\Controller;
use App\Http\Requests\DirectoryRequest;
use App\Models\EmploymentType;
use Illuminate\Http\Request;

class EmploymentTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $types = EmploymentType::all();
        return response()->json($types,200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DirectoryRequest $request)
    {
        $data = $request->all();
        $type = EmploymentType::create($data);
        return response()->json($type,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EmploymentType  $employmentType
     * @return \Illuminate\Http\Response
     */
    public function show(EmploymentType $employmentType)
    {
        return response()->json($employmentType,200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EmploymentType  $employmentType
     * @return \Illuminate\Http\Response
     */
    public function update(DirectoryRequest $request, EmploymentType $employmentType)
    {
        $data = $request->all();
        $employmentType->update($data);
        return response()->json($employmentType,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EmploymentType  $employmentType
     * @return \Illuminate\Http\Response
     */
    public function destroy(EmploymentType $employmentType)
    {
        $employmentType->delete();
        return response()->noContent();
    }
}
