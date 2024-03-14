import axios  from 'axios';

export function erpNextAxiosCall(props,next) {
    const { action, url, params } = props;
    console.log(url)
    axios.get(url,{
      'headers': {
        'Content-Type': 'application/json',
        'X-Frappe-Site-Name': 'jetfreight.acc.shipmnts.com',
        'Authorization': 'Basic NzkwMzJmMDE3YzkzYzRhOmVlNzAzZDVkMGQ0MjkwYQ=='
      },
      'params': {...params}
    })
      .then((response) => {
        next(response)
      })
      .catch((error) => {
        console.log("E -> ",error)
      });
  }