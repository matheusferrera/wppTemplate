import wppClient from './wppClient.js';

const getNumberId = async (numberWpp) => {
    const formatedNumber = await wppClient.getFormattedNumber(numberWpp)
    const contactId = formatedNumber.replace(/\D/g, '') + "@c.us"
    return contactId
}

const Util = {
    getNumberId
};

export default Util