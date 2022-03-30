<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CompaniesController extends Controller
{
    public function index()
    {
        $companies = Company::with('user')->get();
        return response()->json(['message'=>'success','data'=>$companies],200);
    }
    public function verify($id)
    {
        $company = Company::with('user')->findOrFail($id);
        $user = $company->user;
        $user->password = bcrypt(Str::random(16));
        $user->save();
        $company->is_verified = 1;
        $company->save();
        return response()->json(['message'=>'success','data'=>$company],200);
    }
    public function deny($id)
    {
        $company = Company::with('user')->findOrFail($id);
        $user = $company->user;
        $user->password = null;
        $user->save();
        $company->is_verified = 0;
        $company->save();
        return response()->json(['message'=>'success','data'=>$company],200);
    }
}
