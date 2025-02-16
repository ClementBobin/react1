import PropTypes from 'prop-types';

Club.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
    isLigue1: PropTypes.bool.isRequired,
};

// Q2: props give to children

export function Club({ id, name, children, isLigue1 }) {
    // Q7: id = 7 is imuable
    return (
        <>
            {isLigue1 && (
                <>
                    <div>{name}</div>
                    <div>{id}</div>
                    {children}
                </>
            )}
        </>
    );
}

// import { ReactNode } from 'react';
//
// interface ClubProps {
//     id: number;
//     name: string;
//     children: ReactNode;
//     isLigue1: boolean;
// }
//
// export function Club({ id, name, children, isLigue1 }: ClubProps) {
//     return (
//         <>
//             {isLigue1 && (
//                 <>
//                     <div>{name}</div>
//                     <div>{id}</div>
//                     {children}
//                 </>
//             )}
//         </>
//     )
// }