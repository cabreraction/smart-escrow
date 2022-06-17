import { useEffect, useState } from "react";

import Main from "../../Main/Main";
import ProcessInfo from '../../ProcessInfo/ProcessInfo'
import { escrowValidatorsGenerationGuide } from '../../../content/content';

function ServiceValidation() {
  return (
    <Main>
      <div className='d-flex flex-column mx-2'>
        <div className='container mb-4'>
          <h1 className='mb-4'>Validaciones del Fideicomiso</h1>
          <ProcessInfo 
            { ...escrowValidatorsGenerationGuide } 
          />
        </div>
      </div>
    </Main>
  );
}

export default ServiceValidation;