<?php

namespace App\Http\Controllers\Api\Manager;

use App\Http\Controllers\Controller;
use App\Models\CompanyUser;
use App\Models\User;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $data = [];
        if(!$user->company){
            return response()->json(['message'=>'Company not found'],200);
        }
        $user->load('roles','detail.structure','detail.position');
        $company = $user->company->company;
        $data['user'] = $user;
        $data['company'] = $company;
        $data['vacancies'] = 0;
        $data['accepted_employers'] = 0;
        $data['employers'] = CompanyUser::where('company_id',$company->id)->count();
        return response()->json($data,200);
    }

    public function profile_update(Request $request)
    {
        $data = $request->all();
        $user = Auth::user();
        $user->update($data);
        return response($user,200);
    }

    public function delete_profile()
    {
        $user = Auth::user();
        $user->delete();
        return response()->json(['message'=>'success'],200);
    }
}
