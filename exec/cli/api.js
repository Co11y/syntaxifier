/*This script set API methods to works with localhost. */

class API {

	callback(line, id){
		/*This function are usually called by API-included script. */

		line = JSON.parse(line);
		const node = document.getElementById(`api-request-${id}`);
		const func = node.getAttribute('exec');
		document.head.removeChild(node);
		eval(func)(line);
	}


	exec(url, callback, postcallback=null){
		/*Call API script named func with args which is associative
		* array. 
		* url is path to method.
		* callback is function that will be executed as callback. 
		* postcallback is function that will be executed after
		*   API.callback */

		const generateId = () => {
			/*Try to create unique id. */

			const rand = () => Math.floor( Math.random()*900 )+100;

			let r;
			do{
				r = rand();
			}while( document.getElementById(`api-request-${r}`) );
			return r;
		}

		const script = document.createElement('script');
		const reqid = generateId();

		url = url.replace('<reqid>', reqid);
		url = url.replace('<callback>', callback);

		script.src = `${document.location.href}${url}`;
		script.async = true;
		script.id = `api-request-${reqid}`;

		if(postcallback)
			script.setAttribute('exec', postcallback);

		return document.head.appendChild(script);
	}

}
