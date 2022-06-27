import { ReactNode } from "react";

import './style.scss';

interface GroupProps {
  children: ReactNode;
  title: string;
}

export function Group({ children, title }: GroupProps) {

  return (
    <div className='container-group'>
      <header>
        <h1>{title}</h1>

        <section className='buttons'>
          <button
            type='button'
          >
            
          </button>
          <button
            type='button'
          >
            
          </button>
        </section>
      </header>
      {children}
    </div>
  )
}