import React, { useContext } from 'react';
import Description from './Description';
import Requisites from './Requisites';
import Map from './Map';
import { OrgContext } from '../../Components/OrgContext';

const Organisation = ({
  onAppearClipboard,
  onDisappearClipboard,
}) => {
  const org = useContext(OrgContext);
  return (
    <>
      <Description
        image={org.images[0]}
        title={org.title}
        category={org.category}
        description={org.description}
      />

      <Requisites
        onAppearClipboard={onAppearClipboard}
        onDisappearClipboard={onDisappearClipboard}
        phoneNumber={org.phoneNumber}
        siteURL={org.siteURL}
        site={org.site}
        address={org.address}
      />

      <Map
        latitude={org.latitude}
        longitude={org.longitude}
        title={org.title}
      />
    </>
  )
};
export default Organisation;
