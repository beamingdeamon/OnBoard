<?php

namespace App\Http\Controllers\Api\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Hrd\StoreUsersRequest;
use App\Http\Requests\Hrd\UsersEmailStore;
use App\Http\Requests\Hrd\UsersRequest;
use App\Imports\UsersImport;
use App\Models\Company;
use App\Models\CompanyUser;
use App\Models\User;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class UsersController extends Controller
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
        $users = User::with('detail.structure','detail.position','roles')->whereHas('company',function ($q) use ($company){
            $q->where('company_id',$company->id);
        })->get();
        return response()->json($users,200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUsersRequest $request)
    {
        $data = $request->all();
        $data['password'] = bcrypt(Str::random(16));
        $manager = Auth::user();
        if(!$manager->company){
            return response()->json(['message'=>'Company not found'],200);
        }
        $company = $manager->company->company;
        $user = User::create($data);
        $detail = UserDetail::updateOrCreate(
            ['user_id'   =>  $user->id],$data
        );
        $user->roles()->sync(3);
        $company_user = CompanyUser::updateOrCreate([
            'user_id'   =>  $user->id,
            'company_id'    =>  $company->id
        ],[
            'is_informed'   =>  0
        ]);
        $user->load('detail.structure','detail.position','roles');
        return response()->json($user,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $user->load('roles','detail.structure','detail.position');
        return response()->json($user,200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UsersRequest $request, User $user)
    {
        $data = $request->all();
        $user->update($data);
        $detail = UserDetail::updateOrCreate(
            ['user_id'   =>  $user->id],$data
        );
        $user->load('detail.structure','roles','detail.position');
        return response()->json($user,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->noContent();
    }

}
