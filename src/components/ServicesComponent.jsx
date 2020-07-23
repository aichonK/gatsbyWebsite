import React from "react"
import { FaDev } from "react-icons/fa"
import { GrUserManager } from "react-icons/gr"

const ServiceCard = ({icon, title, text}) => {
  console.log({ icon, title, text })
  return (
    <div className="max-w-sm w-full rounded overflow-hidden shadow-md 
    hover:shadow-lg">
      {icon}
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-base text-gray-700">{text}</div>
      </div>
    </div>
  )
}
const ServicesComponent = () => {
  const servicesData = [
    {
      icon: (
        <div className="flex justify-center">
          <FaDev />
        </div>
      ),
      id: 1,
      title: "Fullstack developement",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil",
    },
    {
      icon: (
        <div className="flex justify-center">
          <GrUserManager />
        </div>
      ),
      id: 2,
      title: "Project Management",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil",
    },
    {
      icon: (
        <div className="flex justify-center">
          <FaDev />
        </div>
      ),
      id: 3,
      title: "Investement",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil",
    },
  ]
  return (
    <div className="min-h-screen p-8">
      {/* <div class="flex justify-center py-3">
        <span>Services</span>
      </div> */}
      <p className="text-center py-3 text-2xl">Services</p>
      <div className="bg-gray-200  sm:flex items-center justify-center">
        {servicesData.map(service => {
          return <ServiceCard key={service.id} {...service} />
        })}
      </div>
    </div>
  )
}

export default ServicesComponent
