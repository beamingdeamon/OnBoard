<?php

namespace App\Http\Requests\Hrd;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class StoreUsersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'  =>  [
                'required'
            ],
            'surname'  =>  [
                'required'
            ],
            'email'  =>  [
                'required',
                'email',
                Rule::unique('users')
            ],
            'phone'  =>  [
                'required'
            ],
            'structure_id'  =>  [
                'required'
            ],
            'position_id'  =>  [
                'required'
            ],
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errors' => $validator->errors()], \Symfony\Component\HttpFoundation\Response::HTTP_BAD_REQUEST));
    }
}
