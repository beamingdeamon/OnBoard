<?php

namespace App\Http\Controllers\Api\HRD;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\MailTemplate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MailTemplatesController extends Controller
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
        $mailTemplates = MailTemplate::where('company_id',$company->id)->get();
        return response()->json($mailTemplates,200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        if(!$user->company){
            return response()->json(['message'=>'Company not found'],200);
        }
        $company = $user->company->company;
        $template = MailTemplate::create(['company_id'=>$company->id]);
        return response()->json($template,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MailTemplate  $mailTemplate
     * @return \Illuminate\Http\Response
     */
    public function show(MailTemplate $mailTemplate)
    {
        return response()->json($mailTemplate,200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MailTemplate  $mailTemplate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MailTemplate $mailTemplate)
    {
        $data = $request->all();
        $mailTemplate->update($data);
        return response()->json($mailTemplate,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MailTemplate  $mailTemplate
     * @return \Illuminate\Http\Response
     */
    public function destroy(MailTemplate $mailTemplate)
    {
        $mailTemplate->delete();
        return response()->noContent();
    }
}
