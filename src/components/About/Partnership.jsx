import React from 'react'
import BixiLabLogo from '../../assets/partnership/bixilab.png';
import BlackStoneLogo from '../../assets/partnership/blackstone.png';
import CoinCruxLogo from '../../assets/partnership/coincrux.png';
import TellTaleLogo from '../../assets/partnership/telltaletv.png';
import PopcornPlusLogo from '../../assets/partnership/popcornplus.png';
import Infoterra from '../../assets/partnership/infoterra.png';
import Synthestella from '../../assets/partnership/synthestella.png';

const Partnership = () => {
    return (
        <div>
            <h2 className="flex justify-center items-center text-4xl font-semibold text-center mt-40px">
                Partnership
            </h2>
            <div className="flex justify-center items-center space-x-8 mt-8">
                <img src={CoinCruxLogo} alt="coincrux-logo" className="w-64 h-32" />
                <img src={BixiLabLogo} alt="bixilab-logo" className="w-64 h-32" />
                <img src={BlackStoneLogo} alt="blackstone-logo" className="w-64 h-32" />
                <img src={Infoterra} alt="infoterra-logo" className='w-64 h-32' />
            </div>
            <div className='flex justify-center items-center space-x-8 mt-8'>
                <img src={TellTaleLogo} alt="telltale-logo" className="w-64 h-32" />
                <img src={PopcornPlusLogo} alt="popcornplus-logo" className="w-64 h-32" />
                <img src={Synthestella} alt="synthestella-logo" className="w-64 h-32" />
            </div>
        </div>
    )
}

export default Partnership