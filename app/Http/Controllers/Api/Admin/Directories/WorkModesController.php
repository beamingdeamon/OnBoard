<?php

namespace App\Http\Controllers\Api\Admin\Directories;

use App\Http\Controllers\Controller;
use App\Http\Requests\DirectoryRequest;
use App\Models\WorkMode;
use Illuminate\Http\Request;

class WorkModesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $modes = WorkMode::all();
        return response()->json($modes,200);
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
        $mode = WorkMode::create($data);
        return response()->json($mode,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\WorkMode  $workMode
     * @return \Illuminate\Http\Response
     */
    public function show(WorkMode $workMode)
    {
        return response()->json($workMode,200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\WorkMode  $workMode
     * @return \Illuminate\Http\Response
     */
    public function update(DirectoryRequest $request, WorkMode $workMode)
    {
        $data = $request->all();
        $workMode->update($data);
        return response()->json($workMode,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\WorkMode  $workMode
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkMode $workMode)
    {
        $workMode->delete();
        return response()->noContent();
    }
}
