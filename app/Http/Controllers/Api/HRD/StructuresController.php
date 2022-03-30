<?php

namespace App\Http\Controllers\Api\HRD;

use App\Http\Controllers\Controller;
use App\Http\Requests\DirectoryRequest;
use App\Models\Company;
use App\Models\CompanyUser;
use App\Models\Structure;
use App\Models\StructureUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Psy\Util\Str;

class StructuresController extends Controller
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
        $structures = Structure::with('children.structure_users.user','structure_users.user')->where('company_id',$company->id)->whereNull('parent_id')->get();
        return response()->json($structures,200);
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
        $user = Auth::user();
        $company = Company::where('user_id',$user->id)->first();
        if(!$user->company){
            return response()->json(['message'=>'Company not found'],200);
        }
        $company = $user->company->company;
        $data['company_id'] = $company->id;
        $structure = Structure::create($data);
        return response()->json($structure,200);
    }

    public function show(Structure $structure)
    {
        $structure->load('children.structure_users.user','structure_users.user');
        return response()->json($structure,200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Structure  $structure
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Structure $structure)
    {
        $data = $request->all();
        $structure->update($data);
        $structure->load('children.structure_users.user','structure_users.user');
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

    public function setUsers(Request $request)
    {
        $data = $request->all();
        $structure = Structure::find($data['structure_id']);
        if(isset($data['ids'])){
            foreach ($data['ids'] as $id)
            {
                $exist = StructureUser::where('structure_id',$structure->id)
                    ->where('user_id',$id)
                    ->first();
                if(!$exist){
                    StructureUser::create([
                        'structure_id' => $structure->id,
                        'user_id'   =>  $id
                    ]);
                }
            }
        }
        $structure->load('children.structure_users.user','structure_users.user');
        return response()->json($structure,200);
    }
    public function deleteUser($id)
    {
        $structure_user = StructureUser::find($id);
        $structure_user->delete();
        return response()->noContent();
    }
}
