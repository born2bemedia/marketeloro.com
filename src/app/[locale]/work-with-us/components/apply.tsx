'use client';

import { useApplyToJobStore } from '@/features/jobs/model/apply-to-job.store';
import { ApplyToJobDialog } from '@/features/jobs/ui/apply-to-job-dialog';

import { PageHero } from '@/shared/ui/components/page-hero';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { Button } from '@/shared/ui/kit/button';

export const Apply = () => {
  const { setOpen } = useApplyToJobStore();

  return (
    <section className="p-10 max-md:px-2">
      <PageHero
        className="h-[444px] bg-black/50"
        imgUrl="/images/work-with-us/footer.jpg"
        title="Ready to make your mark?"
        description="We’d love to hear from you. Tell us who you are, what drives you, and where you want to go next."
        customContent={
          <Button
            size="md"
            variant="secondary"
            className="z-10"
            onClick={() => setOpen(true)}
          >
            Apply Now <ArrowRightIcon />
          </Button>
        }
      />
      <ApplyToJobDialog />
    </section>
  );
};
