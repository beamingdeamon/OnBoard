<?php

namespace App\Http\Controllers\Api\Admin\Directories;

use App\Http\Controllers\Controller;
use App\Http\Requests\DirectoryRequest;
use App\Models\SearchReason;
use Illuminate\Http\Request;

class SearchReasonsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reasons = SearchReason::all();
        return response()->json($reasons,200);
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
        $reason = SearchReason::create($data);
        return response()->json($reason,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SearchReason  $searchReason
     * @return \Illuminate\Http\Response
     */
    public function show(SearchReason $searchReason)
    {
        return response()->json($searchReason,200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SearchReason  $searchReason
     * @return \Illuminate\Http\Response
     */
    public function update(DirectoryRequest $request, SearchReason $searchReason)
    {
        $data = $request->all();
        $searchReason->update($data);
        return response()->json($searchReason,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SearchReason  $searchReason
     * @return \Illuminate\Http\Response
     */
    public function destroy(SearchReason $searchReason)
    {
        $searchReason->delete();
        return response()->noContent();
    }
}
