
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';

export default function HomePage() {
  const [select, setSelect] = useState(false); 
  const route = useRouter();
  const t = useTranslations('HomePage');
  const handleChange = (event: ChangeEvent<HTMLSelectElement>)
     // setSelect(event.target.value);
     if (event.target.value) {
        route.push("/en")
        setSelect(true)
     } else {
        route.push("/vi")
        setSelect(false)
     }
  }
  return <>
      <h1>{t('title')}</h1>
      <select onChange={handleChange} name="" id="">
        <option value="vi">tieng viet</option>
        <option selected={false} value="en">tieng anh</option>
      </select>
  </>
}