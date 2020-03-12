import React from "react"

import cv from "../../assets/img/Lane_Le_Prevost_Smith_CV_19.pdf"

export default function Card({ title, links, gridCol, gridRow }) {
  const linkTypes = Object.keys(links)
  const linkTypeSwitch = type => {
    switch (type) {
      case "bestAwards":
        return (
          <div className={links[type].color}>
            <a href={links[type].link} target='blank' rel='noopener noreferrer'>
              {links[type].text}
            </a>
          </div>
        )

      case "contact":
        return (
          <>
            <div>
              <span>Email: </span>
              <a
                href={links[type].email}
                target='blank'
                rel='noopener noreferrer'>
                {links[type].email}
              </a>
            </div>
            <div>
              <span>Mobile: </span>
              <a
                href={`tel:${links[type].mobile}`}
                target='blank'
                rel='noopener noreferrer'>
                {links[type].mobile}
              </a>
            </div>
          </>
        )

      case "social":
        return (
          <>
            <div>
              <span>Instagram: </span>
              <a
                href={links[type].instagram.link}
                target='_blank'
                rel='noopener noreferrer'>
                {links[type].instagram.handle}
              </a>
            </div>
            <div>
              <span>GitHub: </span>
              <a
                href={links[type].github.link}
                target='_blank'
                rel='noopener noreferrer'>
                {links[type].github.handle}
              </a>
            </div>
            <div>
              <span>Are.na: </span>
              <a
                href={links[type].arena.link}
                target='_blank'
                rel='noopener noreferrer'>
                {links[type].arena.handle}
              </a>
            </div>
          </>
        )

      case "resources":
        return (
          <>
            <div>
              <a href={cv} target='_blank' rel='noopener noreferrer'>
                {links[type].cv.handle}
              </a>
            </div>
            <div>
              <a
                href={links[type].webExperiments.link}
                target='_blank'
                rel='noopener noreferrer'>
                {links[type].webExperiments.handle}
              </a>
            </div>
          </>
        )

      default:
        return null
    }
  }
  return (
    <div
      className={`${title.toLowerCase()} grid--col--${gridCol[0]}-${
        gridCol[1]
      } grid--row--${gridRow[0]}-${gridRow[1]}`}>
      <div className='title'>{title}</div>
      {linkTypeSwitch(linkTypes[0])}
    </div>
  )
}
