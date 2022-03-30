<?php

namespace App\Http\Controllers\Api\Admin\Directories;

use App\Http\Controllers\Controller;
use App\Http\Requests\DirectoryRequest;
use App\Models\WorkExperience;
use Illuminate\Http\Request;

class WorkExperiencesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $experiences = WorkExperience::all();
        return response()->json($experiences,200);
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
        $experience = WorkExperience::create($data);
        return response()->json($experience,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WorkExperience  $workExperience
     * @return \Illuminate\Http\Response
     */
    public function show(WorkExperience $workExperience)
    {
        return response()->json($workExperience,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WorkExperience  $workExperience
     * @return \Illuminate\Http\Response
     */
    public function update(DirectoryRequest $request, WorkExperience $workExperience)
    {
        $data = $request->all();
        $workExperience->update($data);
        return response()->json($workExperience,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WorkExperience  $workExperience
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkExperience $workExperience)
    {
        $workExperience->delete();
        return response()->noContent();
    }
}
