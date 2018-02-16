import React from "react";
import Link from "gatsby-link";

const MapMarker = ({branchOffice}) => {
    const size = 20;
    const style = {
        position: 'absolute',
        width: size,
        height: size,
        left: -size / 2,
        top: -size / 2,

        border: '5px solid #f44336',
        borderRadius: size,
        backgroundColor: 'white',
        textAlign: 'center',
        color: '#3f51b5',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 4
    };
    return <Link to={"/branches/"+branchOffice.id}>
        <div style={style}/>
    </Link>
};

export default MapMarker;