import axios from "axios";
import { ref } from "vue";
export default function useAxiosGET(url) {
    const data = ref([]);
    const errors = ref([]);
    const getData = async () => {
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            data.value = await res.data.data;
        } catch (error) {
            if (error.response.data.errors) {
                const errors = error.response.data.errors;
                Object.entries(errors).map((obj) => {
                    const value = obj[1];
                    value.map((error) => {
                        errors.value.push(error);
                    });
                });
            } else if (error.response) {
                errors.value.push(error.response.data.message);
            } else if (error.request) {
                errors.value.push(error.request);
            } else {
                errors.value.push(error.message);
            }
        }
    };

    return { data, getData, errors };
}
