<?php

namespace App\Imports;

use App\Models\CompanyUser;
use App\Models\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\ToCollection;

class UsersImport implements ToCollection
{
    public function  __construct($id)
    {
        $this->id= $id;
    }
    /**
    * @param Collection $rows
    */
    public function collection(Collection $rows)
    {
        for ($i = 1; $i < count($rows); $i++) {
            $data['name']  =  $rows[$i][0] ?? null;
            $data['surname']  =  $rows[$i][1] ?? null;
            $data['email']  =   $rows[$i][2] ?? null;
            $data['phone']  =   $rows[$i][3] ?? null;
            $data['password']  =   bcrypt(Str::random(16));
            $user = User::where('email',$data['email'])->first();
            if(!$user){
                $user = User::create($data);
                $user->roles()->sync([3]);
            }
            $cUser = CompanyUser::where('company_id',$this->id)->where('user_id',$user->id)->first();
            if(!$cUser){
                CompanyUser::create(
                    [
                        'company_id'    =>  $this->id,
                        'user_id'   =>  $user->id
                    ]
                );
            }
        }
    }
}
