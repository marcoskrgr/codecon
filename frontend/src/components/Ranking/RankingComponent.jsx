import { useEffect, useState } from "react";

import { FaTrophy } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function RankingComponent() {

    const [ userRanking, setUserRanking ] = useState({
        ranking: [
            { cdUser: 1, nmUser: 'Renan', points: 1200, time: 126, position: 1 },
            { cdUser: 2, nmUser: 'Marcos', points: 1042, time: 205, position: 2 },
            { cdUser: 3, nmUser: 'Otto', points: 996, time: 95, position: 3 },
            { cdUser: 4, nmUser: 'Gustavo', points: 547, time: 100, position: 4 },
            { cdUser: 5, nmUser: 'Camargo', points: 547, time: 120, position: 5 }
    ]});

    const [ logedUserStats, setLogedUserStats] = useState({
        cdUser: 6, nmUser: 'Usuário', points: 200, time: 500, position: 76
    });

    const [ userInPage, setUserInPage ] = useState(false);

    const convertSecondsToMinutesAndSeconds = time => {
        const minutes = parseInt(time / 60);
        const seconds = time % 60;
        let timeString = '';
        timeString += minutes > 9 ? minutes : '0' + minutes;
        timeString += ':'
        timeString += seconds > 9 ? seconds : '0' + seconds;
        return timeString;
    }

    const formatRankingArray = () => {
        const formatedArray = userRanking.ranking.map(user => {
            user.time = convertSecondsToMinutesAndSeconds(user.time);
            return user;
        })
        setUserRanking({ranking: formatedArray});
    }

    const verifyUserInPage = () => {
        const userInArray = userRanking.ranking.filter(user => {
            return user.cdUser === logedUserStats.cdUser;
        });
        if (userInArray.length) setUserInPage(true);
    }

    const formatUserTime = () => {
        setLogedUserStats({...logedUserStats, time: convertSecondsToMinutesAndSeconds(logedUserStats.time)} );
    }

    useEffect(() => {
        formatRankingArray()
        verifyUserInPage()
        formatUserTime()
    }, []);

    return (
        <div className='w-11/12 h-1/2 bg-blue-400 rounded p-4 overflow-y-auto flex flex-col gap-4'>
            <div className={'flex items-center gap-2'}>
                <FaTrophy size={50} color={'#fff'}/>
                <h1 className={'text-2xl font-extrabold text-white'}>SoftExpert Quiz Ranking</h1>
            </div>
            <div className={'flex flex-col gap-2 text-white'}>
                {
                    userRanking.ranking.map(user => {
                        return (
                            <div className={`flex gap-4 justify-around bg-blue-500 even:bg-blue-600 rounded text-xl font-bold ${user.cdUser === logedUserStats.cdUser && 'text-amber-400 font-bold'}`} key={user.cdUser}>
                                <div className={'w-1/3 text-start'}>
                                    {user.position + '. '}{user.nmUser}
                                </div>
                                <div className={'w-1/4 text-center'}>
                                    {user.points}
                                </div>
                                <div className={'w-1/4 text-end'}>
                                    {user.time}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                !userInPage &&
                <div className={'flex flex-col justify-center'}>
                    <div className={'text-4xl text-white flex justify-center font-bold'}>
                        <HiOutlineDotsHorizontal />
                    </div>
                    <div className={'flex gap-4 justify-around text-xl text-amber-400 font-bold'}>
                        <div className={'w-1/3 text-start'}>
                            {logedUserStats.position + '. '}{logedUserStats.nmUser}
                        </div>
                        <div className={'w-1/4 text-center'}>
                            {logedUserStats.points}
                        </div>
                        <div className={'w-1/4 text-end'}>
                            {logedUserStats.time}
                        </div>
                    </div>
                </div>
            }
        </div>
)
}