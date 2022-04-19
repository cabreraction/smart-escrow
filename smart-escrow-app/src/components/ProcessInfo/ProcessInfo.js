import Alert from 'react-bootstrap/Alert'

function ProcessInfo({ title, summary, steps }) {
  return (
    <Alert variant='info' className='mb-4'>
      <Alert.Heading>
        {title}
      </Alert.Heading>
        <span>
          {summary}
          <ul>
            {
              steps && steps.map(step => (
                  <li>{step}</li>
              ))
            }
          </ul>
        </span>
    </Alert>
  );
}

export default ProcessInfo;