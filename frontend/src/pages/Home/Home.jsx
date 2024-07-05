import React from 'react'
import BodyContent from '../../component/body/BodyContent'
import Header from './Header'
import ExploreItem from '../../component/ExploreItem/ExploreItem'


function Home() {
  return (
    <div>
        <BodyContent>
            <div>
                <Header/>
            </div>
            <div>
                <ExploreItem/>
            </div>
        </BodyContent>   
    </div>
  )
}

export default Home