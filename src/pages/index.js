import React from "react"

import Git from "../components/Git.jsx"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Card from "../components/Card"
import Video from "../components/Video"

export default () => {
  return (
    <>
      <Git />
      <div className='content sm--grid--auto m--grid--auto grid--auto'>
        <Header />

        <Card
          title='Awards'
          links={{
            bestAwards: {
              link:
                "https://bestawards.co.nz/interactive/student-interactive/wayne-shih/gd18exhibitioncom/",
              text: "Bronze Student Interactive 2019 Best Awards",
              color: "bronze"
            }
          }}
          gridCol={[1, 3]}
          gridRow={[4, 5]}
        />

        <main className='grid--col--7-13'>
          <Video />
        </main>

        <Card
          title='Contact'
          links={{
            contact: {
              email: "lanelps@gmail.com",
              mobile: "+64-22-6954688"
            }
          }}
          gridCol={[1, 4]}
          gridRow={[6, 7]}
        />

        <Card
          title='Social'
          links={{
            social: {
              instagram: {
                link: "https://www.instagram.com/lane_lps/",
                handle: "@lane_lps"
              },
              github: {
                link: "https://github.com/lanelps",
                handle: "github.com / lanelps"
              },
              arena: {
                link: "https://www.are.na/lane-le-prevost-smith",
                handle: "are.na/lane-le-prevost-smith"
              }
            }
          }}
          gridCol={[4, 7]}
          gridRow={[6, 7]}
        />

        <Card
          title='Resources'
          links={{
            resources: {
              cv: {
                handle: "CV"
              },
              webExperiments: {
                link: "https://lanelps.github.io/web_elements/",
                handle: "Web Experiments"
              }
            }
          }}
          gridCol={[7, 10]}
          gridRow={[6, 7]}
        />
      </div>

      <Footer />
    </>
  )
}
