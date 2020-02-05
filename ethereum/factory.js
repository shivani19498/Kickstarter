import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance  = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0F6078727a2CD68FB905a0842c79c45017Bab464'
);

export default instance;