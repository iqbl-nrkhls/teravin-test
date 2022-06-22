const Stepper = ({ steps, currentStepNumber }) => {
 
  const stepsDisplay = steps.map((step, index) => {
    return (
      <div key={index} className={`flex items-center py-2 ${index > 0 ? 'grow' : ''}`}>
        {index > 0 && <div className={`h-0.5 w-full grow ${index < currentStepNumber ? 'bg-blue-500' : 'bg-gray-300'}`} />}
        <div className="relative flex flex-col items-center text-gray-300">
          <div className={`
            rounded-full transition duration-100 ease-in-out h-6 w-6 flex items-center justify-center text-white font-bold
            ${index < currentStepNumber ? "bg-blue-500" : "bg-gray-300"}
          `}>
            {index + 1}
          </div>
          <div className={`absolute top-full w-max text-center mt-1 text-sm hidden md:block ${index < currentStepNumber ? "text-black" : "text-gray-300"}`}>
            {step}
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="px-4 md:px-12 md:pb-8">
      <div className="flex justify-between items-center">
        {stepsDisplay}
      </div>
    </div>
  )
}
 
export default Stepper;