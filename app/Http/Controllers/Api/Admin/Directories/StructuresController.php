<?php

namespace App\Http\Controllers\Api\Admin\Directories;

use App\Http\Controllers\Controller;
use App\Http\Requests\DirectoryRequest;
use App\Models\Structure;
use Illuminate\Http\Request;

class StructuresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $structures = Structure::all();
        return response($structures,200);
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
        $structure = Structure::create($data);
        return response()->json($structure,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Structure  $structure
     * @return \Illuminate\Http\Response
     */
    public function show(Structure $structure)
    {
        return response()->json($structure,200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Structure  $structure
     * @return \Illuminate\Http\Response
     */
    public function update(DirectoryRequest $request, Structure $structure)
    {
        $data = $request->all();
        $structure->update($data);
        return response()->json($structure,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Structure  $structure
     * @return \Illuminate\Http\Response
     */
    public function destroy(Structure $structure)
    {
        $structure->delete();
        return response()->noContent();
    }
}
