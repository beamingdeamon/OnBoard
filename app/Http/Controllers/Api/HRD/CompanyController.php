<?php

namespace App\Http\Controllers\Api\HRD;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyUpdateRequest;
use App\Models\Company;
use App\Models\CompanyAddress;
use App\Models\CompanyContact;
use App\Models\CompanyDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompanyController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if(!$user->company){
            return response()->json(['message'=>'Company not found'],200);
        }
        $company = Company::with('user','addresses','contacts')->where('user_id',$user->id)->first();
        if(!$company){
            return response()->json(['message'=>'Компания не найдена!'],200);
        }
        $thisComp = $company->toArray();
        $thisComp['logo'] = $company->detail->logo ?? null;
        $thisComp['sphere'] = $company->detail->sphere ?? null;
        $thisComp['description'] = $company->detail->description ?? null;
        return response()->json($thisComp,200);
    }
    public function setDetails(CompanyUpdateRequest $request)
    {
        $data = $request->all();
        $user = Auth::user();
        if(!$user->company){
            return response()->json(['message'=>'Company not found'],200);
        }
        $company = Company::with('user','addresses','contacts')->where('user_id',$user->id)->first();
        if(!$company){
            return response()->json(['message'=>'Компания не найдена!'],200);
        }
        CompanyContact::where('company_id',$company->id)->delete();
        CompanyAddress::where('company_id',$company->id)->delete();
        CompanyDetail::updateOrCreate(
            [
                'company_id'    =>  $company->id
            ],
            $data
        );
        if(isset($data['contacts'])){
            foreach ($data['contacts'] as $contact){
                $contact['company_id'] = $company->id;
                CompanyContact::create($contact);
            }
        }
        if(isset($data['addresses'])){
            foreach ($data['addresses'] as $address){
                $address['company_id'] = $company->id;
                CompanyAddress::create($address);
            }
        }
        $company->company_name = $data['company_name'];
        $company->save();
        $thisComp = $company->toArray();
        $thisComp['logo'] = $company->detail->logo ?? null;
        $thisComp['sphere'] = $company->detail->sphere ?? null;
        $thisComp['description'] = $company->detail->description ?? null;
        return response()->json($thisComp,200);
    }
}
