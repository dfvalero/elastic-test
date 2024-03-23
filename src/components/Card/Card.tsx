import { DataItem } from '../../api/types.ts';

const Card = (props: DataItem) => {
    return (
        <div>
            <img src={props.profile_image} />
            <img src={props.icon} />
            <div>{props.name}</div>
            <div>{props.job}</div>
            <div>{props.company_name}</div>
            ---
            <div>{props.phone}</div>
            <div>{props.email}</div>
        </div>
    );
};

export default Card;
