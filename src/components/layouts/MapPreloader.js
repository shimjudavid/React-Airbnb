import React, { Fragment} from 'react'
import mappreloader from './mappreloader.gif';
const MapPreloader = () =>
    <Fragment>
      <img src={mappreloader} alt="Loading.." style={{width: '200px', margin: 'auto', display:'block'}}/>
    </Fragment>

export default MapPreloader
