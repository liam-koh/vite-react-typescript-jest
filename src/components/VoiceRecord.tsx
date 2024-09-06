import { Button } from '@o2pluss/o2pluss-design-system';
import React, { useEffect, useState } from 'react'

export default function VoiceRecord() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const $recorder = React.useRef<MediaRecorder | null>(null);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const audioChunks: BlobPart[] = [];
  //       const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  //       $recorder.current = new MediaRecorder(audioStream);

  //       // on시
  //       $recorder.current.ondataavailable = e => {
  //         console.log(e.data);
  //         audioChunks.push(e.data);
  //       }
  //       // off시  
  //       $recorder.current.onstop = () => {
  //         console.log('stop');
  //         const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
  //         const audioUrl = URL.createObjectURL(audioBlob);
  //         audioRef.current!.src = audioUrl;
  //       }
  //     } catch (e) {
  //       console.error(e);
  //     }
      
  //   })()

  //   return () => {
  //     $recorder.current?.stop();
  //     $recorder.current = null;
  //   }
  // })
  const [isStart, setIsStart] = useState(false);

  const startRecord = async () => {
    try {
      const audioChunks: BlobPart[] = [];
      const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      $recorder.current = new MediaRecorder(audioStream);
      console.log('start');

      // on시
      // 이벤트핸들러: 녹음 데이터 취득 처리
      $recorder.current.ondataavailable = e => {
        console.log('available', e.data);
        audioChunks.push(e.data);
      }
      // off시  
      // 이벤트핸들러: 녹음 종료 처리 & 재생하기
      $recorder.current.onstop = () => {
        console.log('stop');
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioRef.current!.src = audioUrl;
      }

      $recorder.current.start();
      setIsStart(true);
    } catch (e) {
      console.error(e);
    }
  }

  const onClickStop = () => {
    setIsStart(false);
    $recorder.current?.stop();
  }

  return (
    <div className='flex-col gap-[20px]'>
      <span>status: {isStart ? '녹음중' : '녹음중이 아님'}</span>
      <div className='flex gap-[20px]'>
        <Button size="md"
          disabled={isStart}
          onClick={startRecord}>start</Button>    
        <Button size="md"
          disabled={!isStart}
          onClick={onClickStop}>stop</Button>    
        <Button size="md">file 추출</Button>
      </div>
      <audio controls ref={audioRef} />
    </div>
  )
}

