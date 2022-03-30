<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json(['message'=>'success','data'=>$users],200);
    }
    public function store(StoreUserRequest $request)
    {
        $data = $request->all();
        $user = User::create($data);
        $user->roles()->sync($data['role_id']);
        return response()->json(['message'=>'success','data'=>$user],200);
    }
    public function update($id,UpdateUserRequest $request)
    {
        $data = $request->all();
        $user = User::find($id);
        $user->update($data);
        $user->roles()->sync($data['role_id']);
        return response()->json(['message'=>'success','data'=>$user],200);
    }
    public function destroy($id)
    {
        $user = User::destroy($id);
        return response()->noContent();
    }
    public function show($id)
    {
        $user = User::with('company.company','roles')->findOrFail($id);
        return response()->json(['message'=>'success','data'=>$user],200);
    }
}
