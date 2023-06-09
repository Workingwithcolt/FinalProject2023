// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
pragma experimental ABIEncoderV2;
/**
 * @title Twitter Contract
 * @dev Store & retrieve value in a variable
 */
contract TaskContract {
      address public chairperson;

    uint public count_medicine  = 0;
    uint public count_medical = 0;
    uint256 public number_patients = 0;
    // making a foodchain contract

// 1 we want the ability to accept proposals and store them 
//propsal it is mean by the medicals 
// propsoal: thier meidcal_name,number,address
//the docter or the chairman  has the ability to add another medical 

// 2 medical_has_a_ability_to_give_medicine & voting ability 
// keep tract of medicine 
// check medical are authenticated to give_medicine 

// 3 chairman has a ability to give the medicine 

// 4 chairman 
// authenticated and deploy the contract

//name of the patient
//medicine date 

struct Medicals{//medicals
        //bytes are the basic unit of the measurement of teh information in computer processing
        bytes32 name;//name of each proposal 
        bytes32 address_;//only enter the city 
        uint256 index;//that represent the medical uniquely
        address medical_address;
}
    Medicals[] public medicals ;//all medicals
 
constructor(){

        // msg.sender = is a global variable that state the person  who
        // is currently connecting to the contract

        chairperson = msg.sender;

        //adding 1 to chairperson weight
        // will add the proposal to the smart contract upon the deployment
        
    }

struct Patient{
        string name;
        bool present;
        address patient_address;
}

struct Medicine{
    string medicine_name;
    uint256 quantity;
    address patient_address;
    uint256 date;
    uint256 year;
    uint256 month;
    bool is_done;
}
 Medicine[] public medicines;

struct Medical_Medicine{
    string type_medicine;
    string name_medicine;
    uint256 quanity_medicine;
}

Medical_Medicine[] public medical_medicine;
 function AddMedicineByMedical(string memory type_medicine,string memory name_medicine,uint256 quanity_medicine) public{
        medical_medicine.push(Medical_Medicine({
            type_medicine:type_medicine,
            name_medicine:name_medicine,
            quanity_medicine:quanity_medicine
        }));        
    }
function getAllmedicine() public view returns(Medical_Medicine[] memory){
    return medical_medicine;
} 
    mapping(address => Patient) public patients;//patients get address as a key and voter value
    //  replace Voter by the patients

    
    

    function FindPosition(address object_address) public returns(uint256){
       uint256 result = 0;
        if(object_address == chairperson){
            result = 1;
            return result;
        }else{
            for(uint256 i=0;i<number_patients;i++){
                if(patients[object_address].patient_address == object_address){
                    result = 2;
                    return result;
                }
            }
            for(uint256 i=0;i<medicals.length;i++){
                if(medicals[i].medical_address == object_address){
                    result =  3;
                    return result;
                }
            }
            return 0;
        }
    }

    //  // authenticate votes
    // function giveRightToVote(address voter) public{
    //     require(
    //         chairperson == msg.sender,
    //         "Only the Chairperson can Give access to vote"
    //     );
    //     // if they does not vote till now
    //     require(
    //         !voters[voter].voted,
    //         "The Voter has already voted"
    //         );
    //     require(voters[voter].weight == 0);
    //     voters[voter].weight = 0;//that represen the give access to vote the particular address
    // }
    function AddPatient(address patient,string memory name) public{
        require(
            chairperson == msg.sender,
            "Only the Chairperson can Give access to vote"
        );//the docter should add the patient
        require(
            !patients[patient].present,
            "The patient already has the account"
        );
        patients[patient] = Patient({
            name:name,
            present:true,
            patient_address:patient
        });
        number_patients+=1;
    }

    function AddMedicineByDocter(string memory medicine_name,uint256 quantity,address patient_address,uint256 date,uint256 year,uint256 month) public{
        require(
            chairperson == msg.sender,
            "Only the Chairperson can Give access to vote"
        );//the docter should add the patient
        require(
            patients[patient_address].present,
            "The patient has not  the account"
        );
        medicines.push(Medicine(medicine_name,quantity,patient_address,date,year,month,false));
    }
    function AddMedicals(bytes32 name,bytes32 address_,address medical_address) public{ 
        require(
            chairperson == msg.sender,
            "Only the Chairperson can Give access to vote"
        );
        for(uint256 i=0;i<medicals.length;i++){
            if(medicals[i].name == name){
               return;
            }
        }
        medicals.push(Medicals(name,address_,count_medical+1,medical_address));
        count_medical = count_medical+1;
    }


    function GetAllMedicine(address patient_address) external view returns(Medicine[] memory){
        Medicine[] memory temporary = new Medicine[](medicines.length);
        uint256 counter =0;
        for(uint256 i=0; i<medicines.length; i++) {
            if(medicines[i].patient_address == patient_address) {
                temporary[counter] = medicines[i];
                counter++;
            }
        }
        Medicine[] memory result = new Medicine[](counter);
        for(uint256 i=0; i<counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }
    function SubstractMedicine(address patient_address,uint256 date,uint256 month,uint256 year,uint256 substract,string memory name) public {
        for(uint256 i=0;i<medicines.length;i++){
            if(medicines[i].patient_address == patient_address && keccak256(bytes(medicines[i].medicine_name)) == keccak256(bytes(name))){
                if(medicines[i].quantity >= substract){
                    medicines[i].quantity = medicines[i].quantity-substract;
                    if(medicines[i].quantity == 0){
                        medicines[i].is_done = true;
                    }
                }else{
                    medicines[i].quantity = 0;
                        medicines[i].is_done = true;
                }
            }
        }
    }

}
