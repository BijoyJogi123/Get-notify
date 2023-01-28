
import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    
      //destructaring in javascript
    let {title,description,ImageUrl,newsUrl,time,author} = this.props
    return (
      <>
      {/* // cards starting */}
      
        <div className='py-4 '>
          <div className='rounded overflow-hidden shadow-lg max-w-sm rounded-lg'>
            <img src={ImageUrl} alt=""  className='w-full object-cover h-48 w-96 '/>
              <p className='text-gray-600 text-end p-1 truncate text-sm'>By {author} at  {new Date(time).toGMTString()}</p>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>
                {title}
              </div>
              <p className='text-gray-600'>
              {description}
              </p>
            </div>
            <div className='grid gap-5 pb-2 px-6  justify-items-start ' >
              <a href={newsUrl} className='bg-gray-200 rounded-full px-3 py-1 font-base mb-2 text-sm  '>Read more</a>
            </div>
            
          </div>

        
      </div>



      {/* This is another cart you can change accroding your need.. */}


      {/* <div>
      <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
      
          <img className="rounded-t-lg w-full object-cover h-48 w-96 " src={ImageUrl}  alt="/"/>
         
        <p className='text-gray-600 text-end p-1 truncate text-sm'>By {author} at  {new Date(time).toGMTString()}</p>
      
        <div className="p-5">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-2">
          {description}
          </p>
          
    </div>
          <div className='grid gap-5 pb-2 px-6  justify-items-start ' >
               <a href={newsUrl} className='bg-gray-200 rounded-full px-3 py-1 font-base mb-2 text-sm  '>Read more</a>
             </div>

            
        </div>
        
      </div>
    
      </div>
      */}
      </>
    )
  }
}
