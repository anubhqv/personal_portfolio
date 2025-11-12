import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                
                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src='/images/project1.png' alt="Ryde"/>
                    </div>
                    <div className='text-content'>
                        <h2>Project One</h2>
                        <p className='text-white-50 md:text-xl'>A brief description of Project One highlighting its features and technologies used.</p>
                    </div>
                </div>

                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project'>
                        <div className='image-wrapper bg-[#ffefdb]'>
                        <img src='/images/project2.png' alt='Library Management Platform'/>
                        </div>
                        <h2>Library Management system</h2>
                    </div>
                    <div className='project'>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                        <img src='/images/project3.png' alt='YC Directory'/>
                        </div>
                        <h2>YC Directory - StartUP Showcase App</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection