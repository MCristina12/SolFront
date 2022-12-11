import 'bootstrap/dist/css/bootstrap.css';

export default function HomeDescp(props){
    return(
        <div className="container-fluid bg-light">
            <h6 className='px-3 py-3' >{props.title}</h6>
        </div>
    )
}