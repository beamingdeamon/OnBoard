import { ref } from "vue";

const company = ref({
    contacts: [
        {
            contact: "",
            contact_type_id: "",
        },
    ],
    addresses: [
        {
            city_id: "",
            address: "",
            map: "",
        },
    ],
    description: "jjj",
    company_name: "",
    sphere: "",
    logo: "",
});

const addAddress = () => {
    company.value.addresses.push({
        city_id: "",
        address: "",
        map: "",
    });
};
const removeContact = (item) => {
    const index = company.value.contacts.indexOf(item);
    if (index !== -1) {
        company.value.contacts.splice(index, 1);
    }
};
const removeAddress = (item) => {
    const index = company.value.addresses.indexOf(item);
    if (index !== -1) {
        company.value.addresses.splice(index, 1);
    }
};
const submitForm = async (formEl) => {
    console.log("aasd");
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                const res = await axios.post(
                    "/api/v1/hrd/set-detail",
                    company.value
                );
                toast.success("Успешно зарегистрировались!");
            } catch (error) {
                if (error.response.data.errors) {
                    const errors = error.response.data.errors;
                    Object.entries(errors).map((obj) => {
                        const key = obj[0];
                        const value = obj[1];
                        value.map((error) => {
                            toast.error(error);
                        });
                    });
                } else if (error.response) {
                    toast.error(error.response.data.message);
                } else if (error.request) {
                    toast.error(error.request);
                } else {
                    toast.error(error.message);
                }
            }
        } else {
            console.log("error submit!", fields);
        }
    });
};
const rules = ref({
    company_name: [
        {
            required: true,
            message: "Обязательное поле",
            trigger: "blur",
        },
    ],
    sphere: [
        {
            required: true,
            message: "Обязательное поле",
            trigger: "blur",
        },
    ],
    description: [
        {
            required: true,
            message: "Обязательное поле",
            trigger: "blur",
        },
    ],
});

const previewFiles = (event) => {
    console.log(event);
    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }

    const file = event.target.files[0];
    getBase64(file).then((data) => (company.value.logo = data));
};

export {
    company,
    rules,
    ruleFormRef,
    removeContact,
    submitForm,
    addAddress,
    removeAddress,
    previewFiles,
};
