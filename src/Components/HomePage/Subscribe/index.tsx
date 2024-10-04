import { SubscribeData } from '../../../json';
import Button from '../../Button';

const Subscribe = () => {
  return (
    <div className='my-[180px] gradient-border'>
      <div className='flex flex-col justify-center items-center py-[60px] px-4'>{SubscribeData?.heading && <h2 className='mb-[24px]'>
        {SubscribeData?.heading}
      </h2>}
        {SubscribeData?.subHeading && <p className='text-center' dangerouslySetInnerHTML={{ __html: SubscribeData?.subHeading }} />}

        {SubscribeData?.placeHolder || SubscribeData?.buttonText && <div className='max-w-[696px] w-full mt-[80px] bg-white/20 backdrop-blur-[208.3px] rounded-xl'>
          <div className='flex justify-between items-center  m-[30px]'>

            {SubscribeData?.placeHolder && <input type="text" placeholder={SubscribeData?.placeHolder} className='border-none bg-transparent w-full min-w-max text-fontBase focus:outline-none focus:border-none focus:ring-0' />}
            {SubscribeData?.buttonText && <Button label={SubscribeData?.buttonText} css='rounded-[42px]' variant='filled' />}
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Subscribe;