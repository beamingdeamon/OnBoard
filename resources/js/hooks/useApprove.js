import axios from "axios";
import { ref } from "vue";
const approveModal = ref(false);
const currentId = ref(null);
const currentCompany = ref("");
const currentState = ref("");

const approve = (company, id, event) => {
    currentId.value = id;
    currentCompany.value = company;
    currentState.value = event;
    event.target.checked = !event.target.checked;
    approveModal.value = true;
};

let approveItem = async () => {
    try {
        const res = await axios.post(
            `/api/v1/admin/companies/verify/${currentId.value}`
        );
        console.log(res);
        currentState.value.target.checked = !currentState.value.target.checked;
        approveModal.value = false;
    } catch (error) {
        console.log(error);
        approveModal.value = false;
    }
};

export {
    approveItem,
    approve,
    approveModal,
    currentId,
    currentCompany,
    currentState,
};
