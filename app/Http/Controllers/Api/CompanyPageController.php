<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\CompanyAddress;
use App\Models\CompanyContact;
use App\Models\CompanyDetail;
use Illuminate\Http\Request;

class CompanyPageController extends Controller
{
    public function getCompanyInfo()
    {
        $company = Company::with(['user','addresses','contacts'])->get();

        return response()->json($company,200);
    }
}
