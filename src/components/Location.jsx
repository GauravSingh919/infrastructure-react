import React from 'react'

const Location = () => {
    return (
        <div>
            <div className="border-4 border-gray-200">


                <iframe
                    title="Locations"
                    src="https://maps.google.com/maps?q=university%20of%20san%20india   &amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    // height="400"
                    className="lg:h-[600px] md:h-[400px] h-[400px]"
                // onLoad={handleImageLoad}
                />
            </div>
        </div>
    )
}

export default Location
