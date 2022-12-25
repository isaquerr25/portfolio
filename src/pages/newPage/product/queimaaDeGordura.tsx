import React, { useEffect } from 'react';

import { Box, Divider, Text } from '@chakra-ui/react';

function QueimaaDeGordura() {
	return (
		<Box
			className='bg-[#F1F5F9] flex flex-col items-center min-h-[100vh] max-w-[100vw] w-[100vw]'
			overflowX='hidden'
		>
			<div className=' w-[100vw] bg-[#1B9FBE] h-[2rem]' />
			<Text className='1.2rem text-gray-500 my-[1.5rem]'>Advertorial</Text>
			<Text className=' text-[red] text-[1.7rem] md:text-[2.2rem] w-[90vw] md:w-[42rem]  md:max-w-[90vw] text-center font-[800]  font-mono pt-[1rem] xl:pt-[2rem] '>
				Nutricionista Revela Método Para Queimar Gordura Abdominal
			</Text>
			<img src='/Nutricionista/m.png' alt='' className=' w-[11rem] py-[3rem]' />
			<Text className='w-[90vw] xl:w-[42rem] text-[1.2rem] md:text-[1.5rem] font-[100] font-mono md:max-w-[90vw]'>
				O renomado Nutricionista Marco Baggio (CRN 9094), especialista em
				emagrecimento saudável, aumento de massa muscular, longevidade e
				qualidade de vida, descobriu o REAL motivo de você não conseguir
				emagrecer (NADA A VER com a sua genética, nem com a quantidade de
				calorias que você come ou com a falta de exercícios físicos).
				<br /> <br />
				Em apresentação surpreendente que você terá a oportunidade de assistir a
				seguir, ele revela 3 alimentos considerados “saudáveis” pela maioria das
				pessoas, mas que são os{' '}
				<span className=' font-[800] '>
					{' '}
					grandes responsáveis por inflamar o seu corpo e pelo acúmulo de
					gordura na sua região abdominal.{' '}
				</span>
				<br /> <br />
				Nesta apresentação, além de lhe mostrar os alimentos que você deve
				evitar a todo custo, ele vai mostrar a você como é possível{' '}
				<span className='font-[800]'>
					{' '}
					eliminar 1 kg de gordura abdominal por semana{' '}
				</span>{' '}
				de forma deliciosa, saudável, rápida e prática e como você poderá usar
				este poderoso método para eliminar o excesso de peso e os diversos
				problemas que ele traz.
				<br /> <br />O método de emagrecimento do Nutricionista Marco Baggio foi
				desenvolvido com base nas mais novas descobertas científicas no campo da
				saúde e nutrição e ganhou fama após ser validado e testado com sucesso
				em milhares de pessoas que{' '}
				<span className='text-[red]'> conseguiram eliminar </span> de vez o peso
				extra e a gordura abdominal. <br /> <br /> Esta apresentação está
				disponível por
				<span className='text-[red]'> TEMPO LIMITADO </span>T e para um número
				pequeno de usuários ao mesmo tempo, então se você se importa com a sua
				saúde e deseja perder peso de forma rápida e saudável, assistir a
				apresentação do Nutricionista Marco{' '}
				<span className='font-[800]'> ATÉ O FIM </span> é sua obrigação.
				<br /> <br />
				<span className='font-[800]'>
					{' '}
					Clique no botão “Ver Apresentação!” abaixo para prosseguir até a
					apresentação.
				</span>
			</Text>
			<div className='flex flex-col gap-y-[1.3rem] mt-[3rem] pb-[5rem]'>
				<a href='/QueimaaDeGordura/QueimaaDeGorduraVideo?sex=man'>
					<img
						src='/Nutricionista/man-button.png'
						alt=''
						className=' xl:h-[8rem] px-[1rem]'
					/>
				</a>
				<Text className='text-center text-[1.8rem]'>OU</Text>
				<a href='/QueimaaDeGordura/QueimaaDeGorduraVideo?sex=girl'>
					<img
						src='/Nutricionista/woman-button.png'
						alt=''
						className=' xl:h-[8rem] px-[1rem]'
					/>
				</a>
			</div>
			<Divider orientation='horizontal' className=' w-[70vw]' />
			<div className='py-[4rem] flex flex-col text-gray-500 w-[40rem] gap-y-[1rem] text-[0.8rem]'>
				<div className=' text-center '>
					<a
						href='https://receitasmodernas.com/termos-de-uso/'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' '}
						Termos{' '}
					</a>{' '}
					-{' '}
					<a
						href='https://receitasmodernas.com/aviso-de-responsabilidade/'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' '}
						Responsabilidade{' '}
					</a>{' '}
					-{' '}
					<a
						href='https://receitasmodernas.com/politica-de-privacidade/'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' '}
						Privacidade{' '}
					</a>{' '}
					-{' '}
					<a
						href='https://receitasmodernas.com/contato/'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' '}
						Contato{' '}
					</a>
				</div>
				<Text className='text-center text-[0.8rem]'>
					Você entende que esta é uma expressão de opiniões e não aconselhamento
					profissional. Você é o único responsável pelo uso de qualquer conteúdo
					e concorda manter D.C. Baggio M.E. e todos os membros e afiliados
					inocentes em qualquer evento ou reivindicação. Você também pode ter
					segurança com os pagamentos quando você clica em um link neste site.
					Recomendamos que você faça sua própria pesquisa independente antes de
					comprar qualquer coisa.
				</Text>
				<Text className='text-center text-[0.8rem]'>
					Copyright 2022 D.C. Baggio M.E. Publishing
				</Text>
			</div>
		</Box>
	);
}

export default QueimaaDeGordura;
