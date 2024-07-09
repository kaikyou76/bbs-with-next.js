import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const BBSCard = () => {
  return (
    <div>
      <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        lorem ipsum dolor sit amet, consectetur adipisicind elit.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-posts/1"} className="text-blue-500">Read More</Link>
      </CardFooter>
    </Card>
    </div>
  )
}

export default BBSCard