import Animation from "./animation";
import Link from 'next/link'

export default function Hero(){
    return (
        <>
        <div className ="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className ="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            안녕하세요. 박미현입니다.
            <br className ="hidden lg:inline-block" />
            오늘도 와자자~!
            </h1>
            <p className ="mb-8 leading-relaxed">
            두손을 인도하겠다는 온갖 없으면, 그들의 바이며, 가는 아니다. 피에 거친 얼음에 심장은 사막이다. 있는 곧 품었기 피어나기 자신과 든 무한한 것이다. 찾아다녀도, 우리 이는 없으면, 능히 노래하며 끓는 싹이 스며들어 그리하였는가? 위하여서 긴지라 우리의 가치를 커다란 위하여서. 그들의 가장 것이 인생을 과실이 뭇 주는 온갖 있는가? 피가 넣는 보이는 이 그러므로 때문이다. 하는 가슴에 청춘에서만 않는 뿐이다. 가는 것이다.보라, 없으면 것은 있는 얼음이 무엇이 용감하고 보라. 만천하의 얼마나 눈이 할지니, 대고, 자신과 것이 있다. 그와 고동을 바이며, 하는 발휘하기 노래하며 그들을 고행을 있음으로써 보라.
            </p>
            <div className ="flex justify-center">
            <Link href='/projects'>
                <a className ="btn-project">
                    프로젝트 보러가기
                </a>
            </Link>
            </div>
        </div>
        <div className ="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation/>
        </div>
        </>
    );
}