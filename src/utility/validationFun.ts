export const validateLen=(val:string|undefined)=>{
    return (val?.length ?? 0) >=4;
}


export const validateEmailOrPhoneNumber = (value: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/; // Adjust the pattern based on your requirements

    if (emailPattern.test(value)) {
        return true;
    } else if (phonePattern.test(value)) {
        return true;
    } else {
        if (value.includes('@')) {
            return 'Invalid email address';
        } else {
            return 'Invalid phone number';
        }
    }
};