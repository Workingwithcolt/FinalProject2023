const ethers = require("ethers")
const TaskContractAddress = "0xc70C9d808090eD471f56D07E61F363f550A9CaC1"
const TaskAbi = require("../../src/component/utils/TaskContract.json")

// async function createBytes(value){
//     const utils = ethers.utils
//     const inBytes = utils.formatBytes32String(value);
//     return inBytes;
// }

// async function parseBytes(value){
//     const utils = ethers.utils
//     const value = utils.parseBytes32String(value);
//     return value;
// }

export const logout = ()=>{
    const { ethereum } = window
    const provider = new ethers.providers.Web3Provider(ethereum);
    provider.removeAllListeners()
}

export const getPatient = async (Address) => {
    var AllPatientsData = []
    const data = null;
    try {
        const { ethereum } = window

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const TaskContract = new ethers.Contract(
                TaskContractAddress,
                TaskAbi.abi,
                signer
            )
            data = await TaskContract.patients(Address).then(responce =>{
                console.log(responce)

            }).catch(err =>{
                console.log(err)
            })
        
            console.log(data)
        } else {
            return "Please Install Ethereum"
        }
    } catch (error) {
        return error + "this error Occur"
    }
    return data;
}

export const getAllMedicine = async (address) => {
    var PatientMedicines = []
    try {
        const { ethereum } = window

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const TaskContract = new ethers.Contract(
                TaskContractAddress,
                TaskAbi.abi,
                signer
            )
            const data = await TaskContract.patient_address(address);
            for (let i = 0; i < data.length; i++) {
                PatientMedicines.push({
                    medicine_name: data[i].medicine_name,
                    quantity: data[i].quantity,
                    patient_address: data[i].patient_address,
                    date: data[i].date,
                    month: data[i].month,
                    year: data[i].year,
                })
            }
        } else {
            return "Please Install Ethereum"
        }
    } catch (error) {
        return error + "this error Occur"
    }
    return PatientMedicines;
}




export const AddMedicineByDocter = async (medicine_name
    , quantity, address, date, year, month) => {
    try {
        const { ethereum } = window
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const TaskContract = new ethers.Contract(
                TaskContractAddress,
                TaskAbi.abi,
                signer
            )
            const chairperson_address = await TaskContract.chairperson()
            if (chairperson_address === address) {
                return "UnAuthorise Access"
            }
            const data = await TaskContract.AddMedicineByDocter(medicine_name, 
                quantity, address, date, year, month);

        } else {
            return "Please Install Ethereum"
        }
    } catch (error) {
        return error + "this error Occur"
    }
    return "Success";
}


export const AddPatient = async (address,name) => {
    try {
        const { ethereum } = window
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const TaskContract = new ethers.Contract(
                TaskContractAddress,
                TaskAbi.abi,
                signer
            )
            const chairperson_address = await TaskContract.chairperson()
            if (chairperson_address === address) {
                return "UnAuthorise Access"
            }
            await TaskContract.AddMedicineByDocter(address,name);
        } else {
            return "Please Install Ethereum"
        }
    } catch (error) {
        return error + "this error Occur"
    }
    return "Success";
}

export const AddMedicals = async (name,local_address,address) => {
    try {
        const { ethereum } = window
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const TaskContract = new ethers.Contract(
                TaskContractAddress,
                TaskAbi.abi,
                signer
            )
            const chairperson_address = await TaskContract.chairperson()
            if (chairperson_address === address) {
                return "UnAuthorise Access"
            }
            await TaskContract.AddMedicineByDocter(name,local_address,address);
        } else {
            return "Please Install Ethereum"
        }
    } catch (error) {
        return error + "this error Occur"
    }
    return "Success";
}


export const SubstractMedicine = async (address,date,month,year,substract,name) => {
    try {
        const { ethereum } = window
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const TaskContract = new ethers.Contract(
                TaskContractAddress,
                TaskAbi.abi,
                signer
            )
            const chairperson_address = await TaskContract.chairperson()
            if (chairperson_address === address) {
                return "UnAuthorise Access"
            }
            await TaskContract.AddMedicineByDocter(address,date,month,year,substract,name);
        } else {
            return "Please Install Ethereum"
        }
    } catch (error) {
        return error + "this error Occur"
    }
    return "Success";
}