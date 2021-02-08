import React from 'react'

export default function PhotoItem({id, img_src}) {
    return (
        <img key={id} src={img_src} alt="Mars photo" className="mars__photo"/>
    )
}
